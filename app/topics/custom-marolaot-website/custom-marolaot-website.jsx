import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-marolaot-website');
}

export default function CustomMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-marolaot-website" />;
}
