import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oldera-download');
}

export default function HighrateOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-oldera-download" />;
}
