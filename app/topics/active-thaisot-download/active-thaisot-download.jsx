import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-download');
}

export default function ActiveThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-download" />;
}
