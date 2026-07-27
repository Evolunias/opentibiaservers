import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online-online');
}

export default function NoResetDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online-online" />;
}
