import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ruthless-chaos-online');
}

export default function CustomRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-ruthless-chaos-online" />;
}
