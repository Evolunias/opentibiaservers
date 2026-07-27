import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-open-pvp');
}

export default function ReneraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="renera-open-pvp" />;
}
