import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-archlight-rules');
}

export default function CustomArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-archlight-rules" />;
}
