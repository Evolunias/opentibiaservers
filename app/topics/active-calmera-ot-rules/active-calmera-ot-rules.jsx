import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-rules');
}

export default function ActiveCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-rules" />;
}
