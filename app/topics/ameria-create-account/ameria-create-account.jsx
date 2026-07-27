import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-create-account');
}

export default function AmeriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="ameria-create-account" />;
}
