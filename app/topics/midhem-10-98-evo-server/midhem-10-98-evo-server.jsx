import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-10-98-evo-server');
}

export default function Midhem1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-10-98-evo-server" />;
}
