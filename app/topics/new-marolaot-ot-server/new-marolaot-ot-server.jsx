import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-ot-server');
}

export default function NewMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-ot-server" />;
}
