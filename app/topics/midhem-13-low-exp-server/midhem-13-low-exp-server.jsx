import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-low-exp-server');
}

export default function Midhem13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-low-exp-server" />;
}
