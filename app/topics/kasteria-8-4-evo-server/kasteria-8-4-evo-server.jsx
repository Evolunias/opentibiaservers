import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-evo-server');
}

export default function Kasteria84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-evo-server" />;
}
