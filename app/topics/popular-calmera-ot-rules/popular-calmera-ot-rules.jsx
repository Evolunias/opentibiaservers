import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-rules');
}

export default function PopularCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-rules" />;
}
