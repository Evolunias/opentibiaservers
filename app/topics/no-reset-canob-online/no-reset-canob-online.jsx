import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-online');
}

export default function NoResetCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-online" />;
}
