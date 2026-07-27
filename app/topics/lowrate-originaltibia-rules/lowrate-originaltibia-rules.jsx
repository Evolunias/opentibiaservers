import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-rules');
}

export default function LowrateOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-rules" />;
}
