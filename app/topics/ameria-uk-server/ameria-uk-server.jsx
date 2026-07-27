import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-uk-server');
}

export default function AmeriaUkServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-uk-server" />;
}
