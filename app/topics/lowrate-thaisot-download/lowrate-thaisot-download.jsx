import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-download');
}

export default function LowrateThaisotDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-download" />;
}
