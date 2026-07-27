import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-download');
}

export default function ElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="eldera-download" />;
}
