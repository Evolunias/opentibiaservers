import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-otmadness-website');
}

export default function PopularOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-otmadness-website" />;
}
