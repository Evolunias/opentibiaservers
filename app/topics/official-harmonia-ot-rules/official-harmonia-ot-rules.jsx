import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-rules');
}

export default function OfficialHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-rules" />;
}
