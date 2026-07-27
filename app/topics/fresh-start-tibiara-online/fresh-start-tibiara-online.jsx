import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiara-online');
}

export default function FreshStartTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiara-online" />;
}
