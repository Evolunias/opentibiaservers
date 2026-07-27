import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-1-evo-server');
}

export default function Kasteria71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-1-evo-server" />;
}
