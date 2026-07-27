import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-calmera-ot-rules');
}

export default function NewSeasonCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-calmera-ot-rules" />;
}
