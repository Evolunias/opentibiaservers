import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-dura-online');
}

export default function NoResetDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-dura-online" />;
}
