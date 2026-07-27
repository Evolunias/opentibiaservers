import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-online');
}

export default function NewSeasonRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-online" />;
}
