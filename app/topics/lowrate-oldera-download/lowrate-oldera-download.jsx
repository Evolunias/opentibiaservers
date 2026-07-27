import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-download');
}

export default function LowrateOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-download" />;
}
