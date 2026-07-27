import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dura-online');
}

export default function PopularDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-dura-online" />;
}
