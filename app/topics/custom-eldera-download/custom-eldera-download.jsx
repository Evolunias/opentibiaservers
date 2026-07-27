import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eldera-download');
}

export default function CustomElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-eldera-download" />;
}
