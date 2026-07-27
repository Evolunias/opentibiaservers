import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-germany');
}

export default function RangerSArcaniRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-germany" />;
}
