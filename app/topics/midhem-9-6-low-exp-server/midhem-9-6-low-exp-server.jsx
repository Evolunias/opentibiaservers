import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-low-exp-server');
}

export default function Midhem96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-low-exp-server" />;
}
