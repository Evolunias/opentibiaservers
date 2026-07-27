import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-0-evo-server');
}

export default function Midhem100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-0-evo-server" />;
}
