import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-marolaot-website');
}

export default function ActiveMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-marolaot-website" />;
}
