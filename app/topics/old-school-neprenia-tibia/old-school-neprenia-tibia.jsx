import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-tibia');
}

export default function OldSchoolNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-tibia" />;
}
