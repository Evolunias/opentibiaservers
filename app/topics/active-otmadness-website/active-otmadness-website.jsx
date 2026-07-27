import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-website');
}

export default function ActiveOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-website" />;
}
