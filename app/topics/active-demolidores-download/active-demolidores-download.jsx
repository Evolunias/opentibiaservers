import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-download');
}

export default function ActiveDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-download" />;
}
