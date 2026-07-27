import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-evo-server');
}

export default function Kasteria100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-evo-server" />;
}
