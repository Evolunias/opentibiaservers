import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-ranger-s-arcani-website');
}

export default function OldSchoolRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-ranger-s-arcani-website" />;
}
