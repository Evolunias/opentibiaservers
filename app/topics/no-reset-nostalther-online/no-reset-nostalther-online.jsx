import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-online');
}

export default function NoResetNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-online" />;
}
