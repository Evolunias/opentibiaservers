import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-evo-server');
}

export default function Midhem84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-evo-server" />;
}
