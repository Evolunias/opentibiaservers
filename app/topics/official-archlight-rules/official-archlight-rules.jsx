import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-archlight-rules');
}

export default function OfficialArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="official-archlight-rules" />;
}
