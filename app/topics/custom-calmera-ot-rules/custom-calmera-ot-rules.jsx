import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-rules');
}

export default function CustomCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-rules" />;
}
