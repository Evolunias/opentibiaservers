import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-login');
}

export default function CustomMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-login" />;
}
