import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-archlight-rules');
}

export default function NewArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="new-archlight-rules" />;
}
