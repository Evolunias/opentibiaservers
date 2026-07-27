import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-online');
}

export default function OfficialArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-online" />;
}
