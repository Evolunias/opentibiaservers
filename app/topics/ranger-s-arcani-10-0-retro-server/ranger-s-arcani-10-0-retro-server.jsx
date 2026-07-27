import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-retro-server');
}

export default function RangerSArcani100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-retro-server" />;
}
