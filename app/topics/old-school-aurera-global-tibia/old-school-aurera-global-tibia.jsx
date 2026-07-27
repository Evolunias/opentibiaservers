import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-tibia');
}

export default function OldSchoolAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-tibia" />;
}
