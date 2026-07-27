import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-low-exp-server');
}

export default function Thaisot76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-low-exp-server" />;
}
