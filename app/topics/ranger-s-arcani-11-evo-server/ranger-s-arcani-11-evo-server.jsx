import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-evo-server');
}

export default function RangerSArcani11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-evo-server" />;
}
