import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-ot');
}

export default function NoResetOtmadnessOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-ot" />;
}
