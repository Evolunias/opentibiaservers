import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness');
}

export default function OfficialOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness" />;
}
