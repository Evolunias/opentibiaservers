import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-otmadness-website');
}

export default function FreshStartOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-otmadness-website" />;
}
