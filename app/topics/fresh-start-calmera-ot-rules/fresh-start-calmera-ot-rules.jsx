import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-rules');
}

export default function FreshStartCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-rules" />;
}
