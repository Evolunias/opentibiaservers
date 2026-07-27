import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-online');
}

export default function PopularTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-online" />;
}
