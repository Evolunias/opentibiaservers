import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-uk-servers');
}

export default function MarolaotUkServersKeywordPage() {
  return <StaticKeywordPage slug="marolaot-uk-servers" />;
}
