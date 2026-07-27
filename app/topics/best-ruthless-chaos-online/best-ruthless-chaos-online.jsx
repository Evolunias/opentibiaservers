import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ruthless-chaos-online');
}

export default function BestRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-ruthless-chaos-online" />;
}
