import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-miracle-download');
}

export default function NoResetMiracleDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-miracle-download" />;
}
