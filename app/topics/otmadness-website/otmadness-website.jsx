import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-website');
}

export default function OtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="otmadness-website" />;
}
