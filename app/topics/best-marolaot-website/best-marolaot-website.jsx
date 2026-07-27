import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-marolaot-website');
}

export default function BestMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-marolaot-website" />;
}
