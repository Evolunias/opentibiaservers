import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-online');
}

export default function NoResetEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-online" />;
}
