import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-client');
}

export default function NoResetCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-client" />;
}
