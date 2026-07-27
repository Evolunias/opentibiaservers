import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-download');
}

export default function CurrentImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-download" />;
}
