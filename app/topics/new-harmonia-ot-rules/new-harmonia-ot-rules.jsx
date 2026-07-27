import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-rules');
}

export default function NewHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-rules" />;
}
