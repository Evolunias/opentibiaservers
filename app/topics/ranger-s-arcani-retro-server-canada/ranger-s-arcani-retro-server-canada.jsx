import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-canada');
}

export default function RangerSArcaniRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-canada" />;
}
