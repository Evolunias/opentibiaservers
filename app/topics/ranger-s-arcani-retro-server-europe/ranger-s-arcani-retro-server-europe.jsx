import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-retro-server-europe');
}

export default function RangerSArcaniRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-retro-server-europe" />;
}
