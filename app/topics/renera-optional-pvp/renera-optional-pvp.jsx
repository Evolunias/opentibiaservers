import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-optional-pvp');
}

export default function ReneraOptionalPvpKeywordPage() {
  return <StaticKeywordPage slug="renera-optional-pvp" />;
}
