import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-online');
}

export default function PopularEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-online" />;
}
