import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-online');
}

export default function PopularTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-online" />;
}
