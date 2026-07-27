import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-online');
}

export default function NewNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-online" />;
}
