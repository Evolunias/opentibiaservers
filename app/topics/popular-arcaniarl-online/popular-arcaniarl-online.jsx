import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-online');
}

export default function PopularArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-online" />;
}
