import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-otmadness-official');
}

export default function HighrateOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-otmadness-official" />;
}
