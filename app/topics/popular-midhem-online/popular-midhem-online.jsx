import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-online');
}

export default function PopularMidhemOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-online" />;
}
