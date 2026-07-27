import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-online');
}

export default function TopTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-online" />;
}
