import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-ots');
}

export default function OldSchoolAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-ots" />;
}
