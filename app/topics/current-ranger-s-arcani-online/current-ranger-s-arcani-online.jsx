import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-online');
}

export default function CurrentRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-online" />;
}
