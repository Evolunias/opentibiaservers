import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-15-evo-server');
}

export default function NtoStar15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-15-evo-server" />;
}
