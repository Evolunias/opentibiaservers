import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-rules');
}

export default function PopularNepreniaRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-rules" />;
}
