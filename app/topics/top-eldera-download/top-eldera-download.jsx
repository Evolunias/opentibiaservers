import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-download');
}

export default function TopElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-download" />;
}
