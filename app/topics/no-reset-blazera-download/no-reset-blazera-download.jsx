import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-download');
}

export default function NoResetBlazeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-download" />;
}
