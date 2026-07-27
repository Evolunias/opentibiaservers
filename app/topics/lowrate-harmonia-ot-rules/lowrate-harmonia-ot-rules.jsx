import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-rules');
}

export default function LowrateHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-rules" />;
}
