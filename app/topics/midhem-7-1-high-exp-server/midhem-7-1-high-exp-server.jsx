import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-high-exp-server');
}

export default function Midhem71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-high-exp-server" />;
}
