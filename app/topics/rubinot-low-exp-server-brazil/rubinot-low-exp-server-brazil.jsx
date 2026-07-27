import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-low-exp-server-brazil');
}

export default function RubinotLowExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-low-exp-server-brazil" />;
}
