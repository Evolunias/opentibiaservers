import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-rules');
}

export default function CalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-rules" />;
}
