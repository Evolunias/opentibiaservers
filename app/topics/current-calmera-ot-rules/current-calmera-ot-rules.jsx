import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-rules');
}

export default function CurrentCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-rules" />;
}
