import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-official');
}

export default function OldSchoolNtoStarOfficialKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-official" />;
}
