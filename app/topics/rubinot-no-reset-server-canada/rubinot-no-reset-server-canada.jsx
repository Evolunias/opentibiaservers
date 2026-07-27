import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-canada');
}

export default function RubinotNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-canada" />;
}
