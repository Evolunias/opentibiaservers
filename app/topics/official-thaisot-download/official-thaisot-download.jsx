import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thaisot-download');
}

export default function OfficialThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-thaisot-download" />;
}
