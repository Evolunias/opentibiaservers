import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-oxygenot-client');
}

export default function OldSchoolOxygenotClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-oxygenot-client" />;
}
