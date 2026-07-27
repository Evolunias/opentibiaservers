import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realesta-download');
}

export default function CustomRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-realesta-download" />;
}
