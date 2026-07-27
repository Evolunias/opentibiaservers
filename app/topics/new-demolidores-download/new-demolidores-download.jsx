import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-download');
}

export default function NewDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-download" />;
}
