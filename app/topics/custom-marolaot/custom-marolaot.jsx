import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot');
}

export default function CustomMarolaotKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot" />;
}
