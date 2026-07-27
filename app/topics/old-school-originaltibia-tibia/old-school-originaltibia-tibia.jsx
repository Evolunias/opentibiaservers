import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-originaltibia-tibia');
}

export default function OldSchoolOriginaltibiaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-originaltibia-tibia" />;
}
