import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-high-exp-server-brazil');
}

export default function RubinotHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-high-exp-server-brazil" />;
}
