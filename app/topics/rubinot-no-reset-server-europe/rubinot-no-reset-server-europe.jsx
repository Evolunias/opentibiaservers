import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-no-reset-server-europe');
}

export default function RubinotNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="rubinot-no-reset-server-europe" />;
}
