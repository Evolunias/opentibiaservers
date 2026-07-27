import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ruthless-chaos-online');
}

export default function NewSeasonRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-ruthless-chaos-online" />;
}
