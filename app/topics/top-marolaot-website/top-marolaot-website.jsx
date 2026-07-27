import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-website');
}

export default function TopMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-website" />;
}
