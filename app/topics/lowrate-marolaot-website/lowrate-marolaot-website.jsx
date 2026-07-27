import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-website');
}

export default function LowrateMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-website" />;
}
