import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-website');
}

export default function TopOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-website" />;
}
