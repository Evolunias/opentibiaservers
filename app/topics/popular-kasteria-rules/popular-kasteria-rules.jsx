import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-rules');
}

export default function PopularKasteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-rules" />;
}
