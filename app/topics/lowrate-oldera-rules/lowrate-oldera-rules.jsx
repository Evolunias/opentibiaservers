import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-rules');
}

export default function LowrateOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-rules" />;
}
