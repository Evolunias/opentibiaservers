import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-coxaot-download');
}

export default function CurrentCoxaotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-coxaot-download" />;
}
