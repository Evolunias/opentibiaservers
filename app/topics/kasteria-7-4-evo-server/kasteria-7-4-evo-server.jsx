import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-evo-server');
}

export default function Kasteria74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-evo-server" />;
}
