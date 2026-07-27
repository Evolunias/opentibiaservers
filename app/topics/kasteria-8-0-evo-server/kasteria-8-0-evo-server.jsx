import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-evo-server');
}

export default function Kasteria80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-evo-server" />;
}
