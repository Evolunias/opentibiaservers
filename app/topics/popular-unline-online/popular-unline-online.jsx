import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-online');
}

export default function PopularUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-online" />;
}
