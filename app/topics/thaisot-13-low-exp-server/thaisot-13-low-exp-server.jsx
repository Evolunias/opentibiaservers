import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-low-exp-server');
}

export default function Thaisot13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-low-exp-server" />;
}
