import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-online');
}

export default function PopularElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-online" />;
}
