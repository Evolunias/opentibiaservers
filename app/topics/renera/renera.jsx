import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera');
}

export default function ReneraKeywordPage() {
  return <StaticKeywordPage slug="renera" />;
}
