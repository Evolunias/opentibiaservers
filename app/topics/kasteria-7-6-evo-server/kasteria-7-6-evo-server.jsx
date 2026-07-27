import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-evo-server');
}

export default function Kasteria76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-evo-server" />;
}
