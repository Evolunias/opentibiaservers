import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-online');
}

export default function CustomArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-online" />;
}
