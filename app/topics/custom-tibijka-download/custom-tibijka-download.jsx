import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-download');
}

export default function CustomTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-download" />;
}
