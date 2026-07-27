import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-server');
}

export default function CustomOlderaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-server" />;
}
