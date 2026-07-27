import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nto-star-download');
}

export default function OfficialNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-nto-star-download" />;
}
