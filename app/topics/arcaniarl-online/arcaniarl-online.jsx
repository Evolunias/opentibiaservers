import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-online');
}

export default function ArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-online" />;
}
