import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-download');
}

export default function CustomImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-download" />;
}
