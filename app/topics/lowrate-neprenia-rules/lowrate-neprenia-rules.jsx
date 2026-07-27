import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-rules');
}

export default function LowrateNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-rules" />;
}
