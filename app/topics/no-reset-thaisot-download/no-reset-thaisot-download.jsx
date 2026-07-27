import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-download');
}

export default function NoResetThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-download" />;
}
