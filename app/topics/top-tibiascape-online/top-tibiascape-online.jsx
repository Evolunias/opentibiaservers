import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-online');
}

export default function TopTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-online" />;
}
