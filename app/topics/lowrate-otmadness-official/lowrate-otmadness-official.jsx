import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-otmadness-official');
}

export default function LowrateOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-otmadness-official" />;
}
