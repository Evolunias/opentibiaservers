import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-evo-server');
}

export default function Kasteria15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-evo-server" />;
}
