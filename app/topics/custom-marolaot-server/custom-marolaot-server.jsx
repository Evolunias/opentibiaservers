import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-server');
}

export default function CustomMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-server" />;
}
