import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-online');
}

export default function TibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="tibiara-online" />;
}
