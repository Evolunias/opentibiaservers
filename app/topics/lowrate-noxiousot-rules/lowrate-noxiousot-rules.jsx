import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-rules');
}

export default function LowrateNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-rules" />;
}
