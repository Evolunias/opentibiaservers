import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-archlight-rules');
}

export default function CurrentArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="current-archlight-rules" />;
}
