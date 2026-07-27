import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-online');
}

export default function PopularOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-online" />;
}
