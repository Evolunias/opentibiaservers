import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ruthless-chaos-online');
}

export default function OfficialRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-ruthless-chaos-online" />;
}
