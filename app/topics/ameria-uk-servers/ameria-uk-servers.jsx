import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-uk-servers');
}

export default function AmeriaUkServersKeywordPage() {
  return <StaticKeywordPage slug="ameria-uk-servers" />;
}
