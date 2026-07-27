import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-website');
}

export default function NoResetMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-website" />;
}
