import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-uk');
}

export default function RangerSArcaniRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-uk" />;
}
