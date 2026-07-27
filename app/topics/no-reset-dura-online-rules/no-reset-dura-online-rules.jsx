import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-rules');
}

export default function NoResetDuraOnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-rules" />;
}
