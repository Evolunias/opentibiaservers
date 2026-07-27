import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-coxaot-download');
}

export default function BestCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-coxaot-download" />;
}
