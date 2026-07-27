import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-online');
}

export default function OfficialRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-online" />;
}
