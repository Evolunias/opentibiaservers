import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-online');
}

export default function BestArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-online" />;
}
