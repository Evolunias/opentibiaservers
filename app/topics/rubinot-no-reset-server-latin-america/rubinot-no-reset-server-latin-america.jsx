import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-latin-america');
}

export default function RubinotNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-latin-america" />;
}
