import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-rules');
}

export default function BestBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-rules" />;
}
