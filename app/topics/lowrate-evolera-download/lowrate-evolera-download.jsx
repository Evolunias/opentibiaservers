import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-download');
}

export default function LowrateEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-download" />;
}
