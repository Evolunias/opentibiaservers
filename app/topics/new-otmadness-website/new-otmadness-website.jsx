import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-otmadness-website');
}

export default function NewOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-otmadness-website" />;
}
