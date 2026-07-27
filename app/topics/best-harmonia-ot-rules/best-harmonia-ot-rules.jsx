import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-rules');
}

export default function BestHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-rules" />;
}
