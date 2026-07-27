import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thaisot-download');
}

export default function NewThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-thaisot-download" />;
}
