import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-online');
}

export default function RangerSArcaniOnlineKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-online" />;
}
