import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-low-exp-server');
}

export default function Midhem86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-low-exp-server" />;
}
