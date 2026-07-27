import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-evo-server');
}

export default function Kasteria13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-evo-server" />;
}
