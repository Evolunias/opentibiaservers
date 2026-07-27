import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-high-exp-server');
}

export default function Midhem76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-high-exp-server" />;
}
