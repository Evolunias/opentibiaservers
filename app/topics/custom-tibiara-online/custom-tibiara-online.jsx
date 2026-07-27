import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiara-online');
}

export default function CustomTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiara-online" />;
}
