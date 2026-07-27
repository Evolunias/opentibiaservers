import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-calmera-ot-rules');
}

export default function BestCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="best-calmera-ot-rules" />;
}
