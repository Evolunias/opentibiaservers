import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('old-school-madnessalive-website');
}

export default function OldSchoolMadnessaliveWebsiteKeywordPage() {
  return <StaticKeywordPage slug="old-school-madnessalive-website" />;
}
