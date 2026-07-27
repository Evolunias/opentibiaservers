import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-uk');
}

export default function RubinotNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-uk" />;
}
