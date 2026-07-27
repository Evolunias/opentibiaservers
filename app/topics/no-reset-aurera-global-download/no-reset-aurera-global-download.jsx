import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-download');
}

export default function NoResetAureraGlobalDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-download" />;
}
