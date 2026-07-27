import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-download');
}

export default function NoResetOlderaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-download" />;
}
