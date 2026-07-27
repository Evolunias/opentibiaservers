import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-status');
}

export default function AmeriaStatusKeywordPage() {
  return <StaticKeywordPage slug="ameria-status" />;
}
