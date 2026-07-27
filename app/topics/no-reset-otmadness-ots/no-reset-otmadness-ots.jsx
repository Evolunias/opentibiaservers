import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-ots');
}

export default function NoResetOtmadnessOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-ots" />;
}
