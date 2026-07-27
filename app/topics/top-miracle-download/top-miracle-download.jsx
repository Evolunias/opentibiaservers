import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-miracle-download');
}

export default function TopMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-miracle-download" />;
}
