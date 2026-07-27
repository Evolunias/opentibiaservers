import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eternal-odyssey-online');
}

export default function PopularEternalOdysseyOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-eternal-odyssey-online" />;
}
