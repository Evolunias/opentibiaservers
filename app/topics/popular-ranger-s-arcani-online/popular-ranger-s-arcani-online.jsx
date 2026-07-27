import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-online');
}

export default function PopularRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-online" />;
}
