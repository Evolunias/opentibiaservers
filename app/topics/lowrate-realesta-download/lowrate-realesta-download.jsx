import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-download');
}

export default function LowrateRealestaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-download" />;
}
