import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-realesta-download');
}

export default function OfficialRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-realesta-download" />;
}
