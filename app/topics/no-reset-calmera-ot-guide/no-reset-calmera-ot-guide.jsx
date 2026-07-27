import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-guide');
}

export default function NoResetCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-guide" />;
}
