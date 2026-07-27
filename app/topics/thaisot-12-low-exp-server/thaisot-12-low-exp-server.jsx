import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-low-exp-server');
}

export default function Thaisot12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-low-exp-server" />;
}
