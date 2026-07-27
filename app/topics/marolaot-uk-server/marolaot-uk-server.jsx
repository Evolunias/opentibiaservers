import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-uk-server');
}

export default function MarolaotUkServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-uk-server" />;
}
