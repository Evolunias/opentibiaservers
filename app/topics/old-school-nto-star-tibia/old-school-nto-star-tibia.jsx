import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-tibia');
}

export default function OldSchoolNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-tibia" />;
}
