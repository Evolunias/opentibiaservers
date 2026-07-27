import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolera-download');
}

export default function NoResetEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolera-download" />;
}
