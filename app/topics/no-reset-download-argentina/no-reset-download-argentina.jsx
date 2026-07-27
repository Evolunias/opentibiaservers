import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-download-argentina');
}

export default function NoResetDownloadArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-download-argentina" />;
}
