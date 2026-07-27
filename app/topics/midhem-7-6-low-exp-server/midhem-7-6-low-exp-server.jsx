import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-low-exp-server');
}

export default function Midhem76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-low-exp-server" />;
}
