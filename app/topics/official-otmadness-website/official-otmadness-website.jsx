import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-website');
}

export default function OfficialOtmadnessWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-website" />;
}
