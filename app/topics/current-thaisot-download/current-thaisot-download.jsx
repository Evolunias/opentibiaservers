import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-download');
}

export default function CurrentThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-download" />;
}
