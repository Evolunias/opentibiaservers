import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-mexico');
}

export default function RubinotNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-mexico" />;
}
