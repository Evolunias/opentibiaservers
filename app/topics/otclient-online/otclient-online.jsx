import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otclient-online');
}

export default function OtclientOnlineKeywordPage() {
  return <StaticKeywordPage slug="otclient-online" />;
}
