import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-9-6-low-exp-server');
}

export default function Thaisot96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-9-6-low-exp-server" />;
}
