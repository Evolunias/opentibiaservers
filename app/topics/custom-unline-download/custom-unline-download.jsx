import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-unline-download');
}

export default function CustomUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-unline-download" />;
}
