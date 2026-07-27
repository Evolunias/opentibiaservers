import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global');
}

export default function OldSchoolAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global" />;
}
