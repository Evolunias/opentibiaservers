import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-calmera-ot-rules');
}

export default function OfficialCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="official-calmera-ot-rules" />;
}
