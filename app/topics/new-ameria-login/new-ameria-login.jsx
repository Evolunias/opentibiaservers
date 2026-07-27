import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ameria-login');
}

export default function NewAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-ameria-login" />;
}
