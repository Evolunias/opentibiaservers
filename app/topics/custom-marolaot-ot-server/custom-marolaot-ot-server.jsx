import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-ot-server');
}

export default function CustomMarolaotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-ot-server" />;
}
