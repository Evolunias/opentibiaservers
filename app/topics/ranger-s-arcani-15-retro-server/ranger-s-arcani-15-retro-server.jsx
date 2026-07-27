import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-retro-server');
}

export default function RangerSArcani15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-retro-server" />;
}
