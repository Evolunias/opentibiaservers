import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-archlight-rules');
}

export default function PopularArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-archlight-rules" />;
}
