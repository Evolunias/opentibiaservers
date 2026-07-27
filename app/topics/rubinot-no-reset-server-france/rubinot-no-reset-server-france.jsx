import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-france');
}

export default function RubinotNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-france" />;
}
