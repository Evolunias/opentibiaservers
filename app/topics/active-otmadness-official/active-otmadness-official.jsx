import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-otmadness-official');
}

export default function ActiveOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-otmadness-official" />;
}
