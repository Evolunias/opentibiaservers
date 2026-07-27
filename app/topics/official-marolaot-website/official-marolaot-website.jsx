import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-website');
}

export default function OfficialMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-website" />;
}
