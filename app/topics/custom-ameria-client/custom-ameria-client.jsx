import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-client');
}

export default function CustomAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-client" />;
}
