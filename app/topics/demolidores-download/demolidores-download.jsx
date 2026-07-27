import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-download');
}

export default function DemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="demolidores-download" />;
}
