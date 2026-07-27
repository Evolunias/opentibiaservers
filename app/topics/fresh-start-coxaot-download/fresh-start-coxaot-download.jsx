import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-download');
}

export default function FreshStartCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-download" />;
}
