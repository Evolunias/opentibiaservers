import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-rules');
}

export default function CustomHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-rules" />;
}
