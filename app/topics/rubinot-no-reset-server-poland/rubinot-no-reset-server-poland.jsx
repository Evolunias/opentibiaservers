import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-poland');
}

export default function RubinotNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-poland" />;
}
