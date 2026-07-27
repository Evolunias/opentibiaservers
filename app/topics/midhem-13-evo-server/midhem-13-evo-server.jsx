import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-evo-server');
}

export default function Midhem13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-evo-server" />;
}
