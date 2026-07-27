import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-online');
}

export default function OtServerListOnlineKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-online" />;
}
