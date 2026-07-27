import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-login');
}

export default function CustomAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-login" />;
}
