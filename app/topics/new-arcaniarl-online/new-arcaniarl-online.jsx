import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-online');
}

export default function NewArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-online" />;
}
