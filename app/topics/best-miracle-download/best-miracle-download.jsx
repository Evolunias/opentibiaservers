import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-miracle-download');
}

export default function BestMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-miracle-download" />;
}
