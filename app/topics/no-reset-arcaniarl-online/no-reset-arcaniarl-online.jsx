import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-online');
}

export default function NoResetArcaniarlOnlineKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-online" />;
}
