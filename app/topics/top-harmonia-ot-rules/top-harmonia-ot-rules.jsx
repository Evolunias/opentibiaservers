import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-rules');
}

export default function TopHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-rules" />;
}
