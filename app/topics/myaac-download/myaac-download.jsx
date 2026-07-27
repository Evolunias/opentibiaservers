import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('myaac-download');
}

export default function MyaacDownloadKeywordPage() {
  return <StaticKeywordPage slug="myaac-download" />;
}
