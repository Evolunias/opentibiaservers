import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-website');
}

export default function MarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="marolaot-website" />;
}
