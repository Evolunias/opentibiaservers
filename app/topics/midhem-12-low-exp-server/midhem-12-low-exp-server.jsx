import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-low-exp-server');
}

export default function Midhem12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-low-exp-server" />;
}
