import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-login');
}

export default function AmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="ameria-login" />;
}
