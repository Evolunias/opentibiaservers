import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-download');
}

export default function CustomTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-download" />;
}
