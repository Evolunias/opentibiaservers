import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-archlight-rules');
}

export default function BestArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="best-archlight-rules" />;
}
