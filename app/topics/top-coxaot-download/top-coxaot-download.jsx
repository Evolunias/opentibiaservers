import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-download');
}

export default function TopCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-download" />;
}
