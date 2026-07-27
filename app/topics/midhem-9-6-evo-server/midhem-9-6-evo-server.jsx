import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-evo-server');
}

export default function Midhem96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-evo-server" />;
}
