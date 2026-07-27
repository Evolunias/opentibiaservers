import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-download');
}

export default function BestRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-realera-download" />;
}
