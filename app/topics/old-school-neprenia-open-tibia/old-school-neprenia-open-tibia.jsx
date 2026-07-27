import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-neprenia-open-tibia');
}

export default function OldSchoolNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-neprenia-open-tibia" />;
}
