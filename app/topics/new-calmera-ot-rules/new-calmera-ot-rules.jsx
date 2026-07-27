import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-rules');
}

export default function NewCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-rules" />;
}
