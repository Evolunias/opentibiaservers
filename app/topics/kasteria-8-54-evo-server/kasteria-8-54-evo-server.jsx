import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-54-evo-server');
}

export default function Kasteria854EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-54-evo-server" />;
}
