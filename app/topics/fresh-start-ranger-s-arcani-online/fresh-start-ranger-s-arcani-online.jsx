import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-online');
}

export default function FreshStartRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-online" />;
}
