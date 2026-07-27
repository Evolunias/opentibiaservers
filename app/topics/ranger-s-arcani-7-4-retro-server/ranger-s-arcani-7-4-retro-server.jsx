import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-retro-server');
}

export default function RangerSArcani74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-retro-server" />;
}
