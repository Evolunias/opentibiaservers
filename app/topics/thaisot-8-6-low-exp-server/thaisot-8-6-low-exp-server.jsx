import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-low-exp-server');
}

export default function Thaisot86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-low-exp-server" />;
}
