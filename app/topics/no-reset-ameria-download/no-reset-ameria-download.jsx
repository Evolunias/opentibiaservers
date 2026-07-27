import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-download');
}

export default function NoResetAmeriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-download" />;
}
