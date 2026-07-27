import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-rubinot-client');
}

export default function OldSchoolRubinotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-rubinot-client" />;
}
