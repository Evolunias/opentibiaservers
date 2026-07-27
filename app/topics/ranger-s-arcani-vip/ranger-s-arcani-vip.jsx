import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-vip');
}

export default function RangerSArcaniVipKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-vip" />;
}
