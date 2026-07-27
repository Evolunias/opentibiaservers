import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-evo-server');
}

export default function Kasteria86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-evo-server" />;
}
