import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-online');
}

export default function ActiveArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-online" />;
}
