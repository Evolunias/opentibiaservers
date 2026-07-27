import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-download');
}

export default function TopRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-download" />;
}
