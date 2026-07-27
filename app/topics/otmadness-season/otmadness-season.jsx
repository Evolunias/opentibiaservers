import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-season');
}

export default function OtmadnessSeasonKeywordPage() {
  return <StaticKeywordPage slug="otmadness-season" />;
}
