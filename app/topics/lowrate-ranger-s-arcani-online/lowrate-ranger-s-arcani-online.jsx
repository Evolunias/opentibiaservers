import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ranger-s-arcani-online');
}

export default function LowrateRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ranger-s-arcani-online" />;
}
