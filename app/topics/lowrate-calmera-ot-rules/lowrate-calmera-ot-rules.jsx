import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-calmera-ot-rules');
}

export default function LowrateCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-calmera-ot-rules" />;
}
