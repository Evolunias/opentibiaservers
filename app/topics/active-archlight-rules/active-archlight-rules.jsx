import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-archlight-rules');
}

export default function ActiveArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="active-archlight-rules" />;
}
