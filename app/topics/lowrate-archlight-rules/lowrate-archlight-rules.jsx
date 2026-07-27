import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-archlight-rules');
}

export default function LowrateArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-archlight-rules" />;
}
