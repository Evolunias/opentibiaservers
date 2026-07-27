import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-evo-server');
}

export default function Midhem12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-evo-server" />;
}
