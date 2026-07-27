import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-online');
}

export default function ActiveRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-online" />;
}
