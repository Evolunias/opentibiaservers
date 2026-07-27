import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-14-evo-server');
}

export default function NtoStar14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-14-evo-server" />;
}
