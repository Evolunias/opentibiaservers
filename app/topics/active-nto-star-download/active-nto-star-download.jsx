import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nto-star-download');
}

export default function ActiveNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-nto-star-download" />;
}
