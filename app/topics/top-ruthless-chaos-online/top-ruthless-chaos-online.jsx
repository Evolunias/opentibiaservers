import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ruthless-chaos-online');
}

export default function TopRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="top-ruthless-chaos-online" />;
}
