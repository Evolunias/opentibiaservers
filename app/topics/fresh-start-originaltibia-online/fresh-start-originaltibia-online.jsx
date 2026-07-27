import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-online');
}

export default function FreshStartOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-online" />;
}
