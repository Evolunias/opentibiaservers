import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-yurots-download');
}

export default function CustomYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-yurots-download" />;
}
