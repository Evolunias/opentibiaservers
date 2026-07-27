import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-download');
}

export default function CustomClassicusDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-download" />;
}
