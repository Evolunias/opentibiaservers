import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-online');
}

export default function BestRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-realera-online" />;
}
