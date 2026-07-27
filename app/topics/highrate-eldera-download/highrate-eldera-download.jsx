import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-eldera-download');
}

export default function HighrateElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-eldera-download" />;
}
