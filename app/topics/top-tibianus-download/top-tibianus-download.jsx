import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-download');
}

export default function TopTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-download" />;
}
