import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-archlight-rules');
}

export default function TopArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="top-archlight-rules" />;
}
