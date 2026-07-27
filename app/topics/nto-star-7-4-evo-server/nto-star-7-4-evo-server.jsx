import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-7-4-evo-server');
}

export default function NtoStar74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-7-4-evo-server" />;
}
