import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-download');
}

export default function BestElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-download" />;
}
