import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-online');
}

export default function NoResetAlasteraOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-online" />;
}
