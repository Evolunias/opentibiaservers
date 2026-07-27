import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-download');
}

export default function NoResetUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-download" />;
}
