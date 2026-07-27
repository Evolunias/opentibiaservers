import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-otmadness-official');
}

export default function CustomOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-otmadness-official" />;
}
