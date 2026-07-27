import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-non-pvp-server');
}

export default function RangerSArcani96NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-non-pvp-server" />;
}
