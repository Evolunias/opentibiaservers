import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-eldera-download');
}

export default function LowrateElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-eldera-download" />;
}
