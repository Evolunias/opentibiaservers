import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('renera-server');
}

export default function ReneraServerKeywordPage() {
  return <StaticKeywordPage slug="renera-server" />;
}
