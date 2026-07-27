import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-online');
}

export default function AmeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="amera-online" />;
}
