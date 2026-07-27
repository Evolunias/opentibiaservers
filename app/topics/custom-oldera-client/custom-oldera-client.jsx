import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oldera-client');
}

export default function CustomOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-oldera-client" />;
}
