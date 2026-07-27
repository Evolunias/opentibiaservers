import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-low-exp-server');
}

export default function Thaisot15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-low-exp-server" />;
}
