import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-archlight-rules');
}

export default function FreshStartArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-archlight-rules" />;
}
