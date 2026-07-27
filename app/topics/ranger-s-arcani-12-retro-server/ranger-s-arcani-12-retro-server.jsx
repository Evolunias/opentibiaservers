import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-retro-server');
}

export default function RangerSArcani12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-retro-server" />;
}
