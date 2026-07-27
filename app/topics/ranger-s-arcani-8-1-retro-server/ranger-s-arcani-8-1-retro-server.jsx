import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-1-retro-server');
}

export default function RangerSArcani81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-1-retro-server" />;
}
