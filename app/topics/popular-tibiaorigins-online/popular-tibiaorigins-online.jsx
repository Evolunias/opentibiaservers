import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaorigins-online');
}

export default function PopularTibiaoriginsOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaorigins-online" />;
}
