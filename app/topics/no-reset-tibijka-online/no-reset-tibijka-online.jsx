import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-online');
}

export default function NoResetTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-online" />;
}
