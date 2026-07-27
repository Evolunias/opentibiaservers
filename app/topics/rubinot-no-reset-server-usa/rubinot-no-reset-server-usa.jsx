import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-usa');
}

export default function RubinotNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-usa" />;
}
