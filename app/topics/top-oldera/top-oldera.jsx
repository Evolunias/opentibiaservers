import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera');
}

export default function TopOlderaKeywordPage() {
  return <StaticKeywordPage slug="top-oldera" />;
}
