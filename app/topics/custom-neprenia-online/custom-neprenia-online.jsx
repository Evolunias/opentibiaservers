import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-neprenia-online');
}

export default function CustomNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-neprenia-online" />;
}
