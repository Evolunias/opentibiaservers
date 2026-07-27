import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-client');
}

export default function OldSchoolAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-client" />;
}
