import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-online');
}

export default function NewRangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-online" />;
}
