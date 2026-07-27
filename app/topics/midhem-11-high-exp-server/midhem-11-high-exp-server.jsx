import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-high-exp-server');
}

export default function Midhem11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-high-exp-server" />;
}
