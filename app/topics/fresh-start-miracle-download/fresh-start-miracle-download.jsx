import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-miracle-download');
}

export default function FreshStartMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-miracle-download" />;
}
