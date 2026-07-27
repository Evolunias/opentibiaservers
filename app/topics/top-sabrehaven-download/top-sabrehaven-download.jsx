import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-sabrehaven-download');
}

export default function TopSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-sabrehaven-download" />;
}
