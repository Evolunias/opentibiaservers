import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-download');
}

export default function CustomMediviaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-download" />;
}
