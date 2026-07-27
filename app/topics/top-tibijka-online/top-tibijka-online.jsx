import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-online');
}

export default function TopTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-online" />;
}
