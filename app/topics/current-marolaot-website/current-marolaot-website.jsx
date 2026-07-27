import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-website');
}

export default function CurrentMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-website" />;
}
