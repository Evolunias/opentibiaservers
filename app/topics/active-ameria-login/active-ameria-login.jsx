import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-login');
}

export default function ActiveAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-login" />;
}
