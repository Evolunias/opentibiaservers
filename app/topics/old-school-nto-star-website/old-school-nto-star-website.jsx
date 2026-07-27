import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-nto-star-website');
}

export default function OldSchoolNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-nto-star-website" />;
}
