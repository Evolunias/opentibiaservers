import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otmadness-website');
}

export default function BestOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-otmadness-website" />;
}
