import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-imperianic-download');
}

export default function TopImperianicDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-imperianic-download" />;
}
