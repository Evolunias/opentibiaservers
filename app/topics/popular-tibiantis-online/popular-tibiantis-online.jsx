import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-online');
}

export default function PopularTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-online" />;
}
