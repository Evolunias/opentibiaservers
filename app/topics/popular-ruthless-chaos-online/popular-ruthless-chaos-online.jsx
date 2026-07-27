import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ruthless-chaos-online');
}

export default function PopularRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-ruthless-chaos-online" />;
}
