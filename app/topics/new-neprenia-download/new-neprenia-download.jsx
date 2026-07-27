import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-neprenia-download');
}

export default function NewNepreniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-neprenia-download" />;
}
