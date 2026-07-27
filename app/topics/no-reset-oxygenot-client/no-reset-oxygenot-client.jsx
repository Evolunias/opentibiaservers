import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-client');
}

export default function NoResetOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-client" />;
}
