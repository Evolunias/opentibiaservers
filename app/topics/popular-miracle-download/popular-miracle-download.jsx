import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-miracle-download');
}

export default function PopularMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-miracle-download" />;
}
