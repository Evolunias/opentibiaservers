import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-rules');
}

export default function NewSeasonHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-rules" />;
}
