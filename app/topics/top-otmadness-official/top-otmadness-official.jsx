import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-otmadness-official');
}

export default function TopOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-otmadness-official" />;
}
