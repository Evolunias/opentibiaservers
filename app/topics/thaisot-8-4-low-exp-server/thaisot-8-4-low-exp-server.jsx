import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-low-exp-server');
}

export default function Thaisot84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-low-exp-server" />;
}
