import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-download');
}

export default function PopularCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-download" />;
}
