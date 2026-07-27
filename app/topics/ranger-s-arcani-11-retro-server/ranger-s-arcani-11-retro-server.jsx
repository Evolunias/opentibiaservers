import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-retro-server');
}

export default function RangerSArcani11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-retro-server" />;
}
