import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-online');
}

export default function NoResetNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-online" />;
}
