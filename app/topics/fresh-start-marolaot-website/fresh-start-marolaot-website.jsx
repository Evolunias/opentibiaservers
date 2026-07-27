import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-website');
}

export default function FreshStartMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-website" />;
}
