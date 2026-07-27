import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-neprenia-download');
}

export default function OfficialNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-neprenia-download" />;
}
