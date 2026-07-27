import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-realera-download');
}

export default function CustomRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-realera-download" />;
}
