import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-download');
}

export default function CustomThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-download" />;
}
