import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-online');
}

export default function BestNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-online" />;
}
