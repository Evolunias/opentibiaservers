import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-rules');
}

export default function PopularBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-rules" />;
}
