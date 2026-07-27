import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-download');
}

export default function CurrentRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-download" />;
}
