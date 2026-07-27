import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-guide');
}

export default function NoResetInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-guide" />;
}
