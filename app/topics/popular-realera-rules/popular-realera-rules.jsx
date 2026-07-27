import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-rules');
}

export default function PopularRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-rules" />;
}
