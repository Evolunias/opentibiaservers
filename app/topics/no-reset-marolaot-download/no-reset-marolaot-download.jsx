import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-marolaot-download');
}

export default function NoResetMarolaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-marolaot-download" />;
}
