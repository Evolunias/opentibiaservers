import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-germany');
}

export default function RubinotNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-germany" />;
}
