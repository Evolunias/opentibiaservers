import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-website');
}

export default function LowrateOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-website" />;
}
