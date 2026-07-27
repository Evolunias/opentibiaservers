import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-rules');
}

export default function TopCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-rules" />;
}
