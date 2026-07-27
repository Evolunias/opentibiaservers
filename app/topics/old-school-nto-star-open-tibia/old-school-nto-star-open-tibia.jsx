import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-open-tibia');
}

export default function OldSchoolNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-open-tibia" />;
}
