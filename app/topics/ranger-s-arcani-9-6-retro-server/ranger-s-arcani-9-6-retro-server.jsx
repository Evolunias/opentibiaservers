import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-retro-server');
}

export default function RangerSArcani96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-retro-server" />;
}
