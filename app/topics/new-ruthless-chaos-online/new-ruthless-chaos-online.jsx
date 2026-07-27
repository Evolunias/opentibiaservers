import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ruthless-chaos-online');
}

export default function NewRuthlessChaosOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-ruthless-chaos-online" />;
}
