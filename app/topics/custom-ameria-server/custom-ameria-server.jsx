import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-server');
}

export default function CustomAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-server" />;
}
