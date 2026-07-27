import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-carlinot-client');
}

export default function OldSchoolCarlinotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-carlinot-client" />;
}
