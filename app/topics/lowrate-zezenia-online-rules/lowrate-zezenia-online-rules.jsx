import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-zezenia-online-rules');
}

export default function LowrateZezeniaOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-zezenia-online-rules" />;
}
