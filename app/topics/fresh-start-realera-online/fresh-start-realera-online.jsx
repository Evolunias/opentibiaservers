import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realera-online');
}

export default function FreshStartRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realera-online" />;
}
