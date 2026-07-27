import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-rules');
}

export default function ActiveHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-rules" />;
}
