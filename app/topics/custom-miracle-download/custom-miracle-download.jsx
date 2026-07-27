import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-miracle-download');
}

export default function CustomMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-miracle-download" />;
}
