import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-website');
}

export default function NewMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-website" />;
}
