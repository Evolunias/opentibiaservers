import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-download');
}

export default function PopularElderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-download" />;
}
