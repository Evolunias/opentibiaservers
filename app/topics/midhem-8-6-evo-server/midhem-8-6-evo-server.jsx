import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-evo-server');
}

export default function Midhem86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-evo-server" />;
}
