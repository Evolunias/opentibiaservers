import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-evo-server');
}

export default function Midhem71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-evo-server" />;
}
