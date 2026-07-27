import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-poland');
}

export default function RangerSArcaniRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-poland" />;
}
