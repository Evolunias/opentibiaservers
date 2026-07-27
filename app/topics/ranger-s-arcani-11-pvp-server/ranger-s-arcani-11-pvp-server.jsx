import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-11-pvp-server');
}

export default function RangerSArcani11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-11-pvp-server" />;
}
