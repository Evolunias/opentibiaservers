import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-evo-server');
}

export default function Midhem11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-evo-server" />;
}
