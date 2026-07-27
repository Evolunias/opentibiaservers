import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-miracle-download');
}

export default function CurrentMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-miracle-download" />;
}
