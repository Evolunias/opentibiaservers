import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-rules');
}

export default function NewSeasonMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-rules" />;
}
