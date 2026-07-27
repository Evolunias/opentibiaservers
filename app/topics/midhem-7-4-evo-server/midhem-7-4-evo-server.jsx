import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-evo-server');
}

export default function Midhem74EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-evo-server" />;
}
