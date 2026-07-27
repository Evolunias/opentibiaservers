import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-online');
}

export default function FreshStartArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-online" />;
}
