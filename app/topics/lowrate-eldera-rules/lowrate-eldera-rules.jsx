import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-rules');
}

export default function LowrateElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-rules" />;
}
