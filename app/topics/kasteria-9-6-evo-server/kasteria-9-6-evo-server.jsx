import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-evo-server');
}

export default function Kasteria96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-evo-server" />;
}
