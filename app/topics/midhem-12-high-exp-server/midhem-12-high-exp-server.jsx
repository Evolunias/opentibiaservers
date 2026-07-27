import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-high-exp-server');
}

export default function Midhem12HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-high-exp-server" />;
}
