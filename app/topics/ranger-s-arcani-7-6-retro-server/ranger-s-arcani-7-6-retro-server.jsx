import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-retro-server');
}

export default function RangerSArcani76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-retro-server" />;
}
