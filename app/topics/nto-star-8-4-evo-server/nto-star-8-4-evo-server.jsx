import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-8-4-evo-server');
}

export default function NtoStar84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-8-4-evo-server" />;
}
