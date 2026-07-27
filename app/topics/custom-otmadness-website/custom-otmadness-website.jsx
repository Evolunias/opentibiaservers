import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-website');
}

export default function CustomOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-website" />;
}
