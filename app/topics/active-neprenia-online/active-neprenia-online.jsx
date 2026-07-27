import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-neprenia-online');
}

export default function ActiveNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-neprenia-online" />;
}
