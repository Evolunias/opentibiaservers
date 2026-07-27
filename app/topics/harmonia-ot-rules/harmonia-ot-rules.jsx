import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-rules');
}

export default function HarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-rules" />;
}
