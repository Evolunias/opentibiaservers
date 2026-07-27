import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-archlight-rules');
}

export default function NoResetArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-archlight-rules" />;
}
