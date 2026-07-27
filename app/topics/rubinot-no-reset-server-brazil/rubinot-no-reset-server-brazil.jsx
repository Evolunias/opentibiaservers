import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-brazil');
}

export default function RubinotNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-brazil" />;
}
