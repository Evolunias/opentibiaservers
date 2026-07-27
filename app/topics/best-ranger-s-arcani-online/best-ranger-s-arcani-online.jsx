import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-online');
}

export default function BestRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-online" />;
}
