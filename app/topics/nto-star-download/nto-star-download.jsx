import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-download');
}

export default function NtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="nto-star-download" />;
}
