import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-wars');
}

export default function ReneraWarsKeywordPage() {
  return <StaticKeywordPage slug="renera-wars" />;
}
