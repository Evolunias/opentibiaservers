import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zunera-ot-rules');
}

export default function LowrateZuneraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zunera-ot-rules" />;
}
