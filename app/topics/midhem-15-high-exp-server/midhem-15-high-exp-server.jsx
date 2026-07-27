import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-high-exp-server');
}

export default function Midhem15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-high-exp-server" />;
}
