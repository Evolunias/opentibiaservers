import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-retro-server');
}

export default function RangerSArcani14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-retro-server" />;
}
