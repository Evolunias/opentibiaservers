import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-rules');
}

export default function NoResetCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-rules" />;
}
