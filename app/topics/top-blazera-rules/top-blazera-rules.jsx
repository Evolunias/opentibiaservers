import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-blazera-rules');
}

export default function TopBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="top-blazera-rules" />;
}
