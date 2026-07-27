import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-72-evo-server');
}

export default function Midhem772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-72-evo-server" />;
}
