import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realera-download');
}

export default function TopRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-realera-download" />;
}
