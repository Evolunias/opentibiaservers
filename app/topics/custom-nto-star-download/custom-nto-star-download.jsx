import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nto-star-download');
}

export default function CustomNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-nto-star-download" />;
}
