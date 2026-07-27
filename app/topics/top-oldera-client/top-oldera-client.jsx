import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-client');
}

export default function TopOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-client" />;
}
