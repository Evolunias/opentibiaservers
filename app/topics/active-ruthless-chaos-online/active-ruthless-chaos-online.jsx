import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ruthless-chaos-online');
}

export default function ActiveRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-ruthless-chaos-online" />;
}
