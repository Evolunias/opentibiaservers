import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-evo-server');
}

export default function Midhem81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-evo-server" />;
}
