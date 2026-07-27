import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-online');
}

export default function TopArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-online" />;
}
