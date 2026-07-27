import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-online');
}

export default function CurrentArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-online" />;
}
