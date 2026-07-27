import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-aurera-global-open-tibia');
}

export default function OldSchoolAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-aurera-global-open-tibia" />;
}
