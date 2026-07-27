import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-client');
}

export default function NoResetRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-client" />;
}
