import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-rules');
}

export default function PopularAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-rules" />;
}
