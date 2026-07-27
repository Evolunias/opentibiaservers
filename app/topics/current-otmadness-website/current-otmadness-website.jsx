import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-website');
}

export default function CurrentOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-website" />;
}
