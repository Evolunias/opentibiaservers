import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-classick-drakoria-website');
}

export default function OldSchoolClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-classick-drakoria-website" />;
}
