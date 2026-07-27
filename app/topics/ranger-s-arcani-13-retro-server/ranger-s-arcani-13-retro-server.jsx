import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-retro-server');
}

export default function RangerSArcani13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-retro-server" />;
}
