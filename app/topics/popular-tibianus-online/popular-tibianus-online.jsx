import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-online');
}

export default function PopularTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-online" />;
}
