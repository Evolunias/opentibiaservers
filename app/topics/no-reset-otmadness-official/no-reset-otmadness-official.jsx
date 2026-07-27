import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-official');
}

export default function NoResetOtmadnessOfficialKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-official" />;
}
