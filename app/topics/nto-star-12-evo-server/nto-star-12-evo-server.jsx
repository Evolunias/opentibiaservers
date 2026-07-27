import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-12-evo-server');
}

export default function NtoStar12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-12-evo-server" />;
}
