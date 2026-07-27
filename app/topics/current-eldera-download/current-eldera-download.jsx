import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-download');
}

export default function CurrentElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-download" />;
}
