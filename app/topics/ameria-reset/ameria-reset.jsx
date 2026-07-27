import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-reset');
}

export default function AmeriaResetKeywordPage() {
  return <StaticKeywordPage slug="ameria-reset" />;
}
