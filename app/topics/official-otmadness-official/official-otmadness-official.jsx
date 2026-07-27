import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-otmadness-official');
}

export default function OfficialOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-otmadness-official" />;
}
