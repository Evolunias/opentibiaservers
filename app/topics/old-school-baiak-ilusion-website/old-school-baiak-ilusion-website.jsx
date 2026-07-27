import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-baiak-ilusion-website');
}

export default function OldSchoolBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-baiak-ilusion-website" />;
}
