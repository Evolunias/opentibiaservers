import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-rules');
}

export default function CurrentHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-rules" />;
}
