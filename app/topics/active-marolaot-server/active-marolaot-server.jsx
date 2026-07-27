import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-server');
}

export default function ActiveMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-server" />;
}
