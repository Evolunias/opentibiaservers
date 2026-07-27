import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-alastera-website');
}

export default function OldSchoolAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-alastera-website" />;
}
