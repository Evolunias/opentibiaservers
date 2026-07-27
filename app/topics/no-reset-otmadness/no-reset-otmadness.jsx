import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness');
}

export default function NoResetOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness" />;
}
