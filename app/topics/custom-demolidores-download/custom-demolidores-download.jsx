import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-demolidores-download');
}

export default function CustomDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-demolidores-download" />;
}
