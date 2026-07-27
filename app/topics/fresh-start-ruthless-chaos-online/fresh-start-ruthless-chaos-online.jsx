import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ruthless-chaos-online');
}

export default function FreshStartRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ruthless-chaos-online" />;
}
