import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-demolidores-download');
}

export default function NoResetDemolidoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-demolidores-download" />;
}
