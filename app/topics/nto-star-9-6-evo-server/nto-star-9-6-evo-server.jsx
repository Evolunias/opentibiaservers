import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-9-6-evo-server');
}

export default function NtoStar96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="nto-star-9-6-evo-server" />;
}
