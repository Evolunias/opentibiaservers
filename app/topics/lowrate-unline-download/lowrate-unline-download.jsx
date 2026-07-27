import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-download');
}

export default function LowrateUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-download" />;
}
