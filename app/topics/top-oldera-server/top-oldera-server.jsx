import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-server');
}

export default function TopOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-server" />;
}
