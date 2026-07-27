import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria');
}

export default function AmeriaKeywordPage() {
  return <StaticKeywordPage slug="ameria" />;
}
