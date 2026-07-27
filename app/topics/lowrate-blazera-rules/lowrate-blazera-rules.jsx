import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-rules');
}

export default function LowrateBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-rules" />;
}
