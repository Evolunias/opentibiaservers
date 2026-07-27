import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-ot');
}

export default function OldSchoolAureraGlobalOtKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-ot" />;
}
