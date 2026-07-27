import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-north-america');
}

export default function RubinotNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-north-america" />;
}
