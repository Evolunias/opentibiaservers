import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-online');
}

export default function CustomRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-online" />;
}
