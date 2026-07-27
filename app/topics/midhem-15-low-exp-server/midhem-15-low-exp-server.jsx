import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-low-exp-server');
}

export default function Midhem15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-low-exp-server" />;
}
