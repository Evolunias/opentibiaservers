import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-carlinot-client');
}

export default function OfficialCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="official-carlinot-client" />;
}
