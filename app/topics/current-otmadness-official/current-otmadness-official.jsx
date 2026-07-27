import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-otmadness-official');
}

export default function CurrentOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-otmadness-official" />;
}
