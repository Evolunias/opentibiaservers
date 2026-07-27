import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nto-star-download');
}

export default function NewNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-nto-star-download" />;
}
