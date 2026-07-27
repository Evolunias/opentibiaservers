import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-server');
}

export default function NewMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-server" />;
}
