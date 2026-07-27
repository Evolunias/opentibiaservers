import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-world');
}

export default function ReneraWorldKeywordPage() {
  return <StaticKeywordPage slug="renera-world" />;
}
