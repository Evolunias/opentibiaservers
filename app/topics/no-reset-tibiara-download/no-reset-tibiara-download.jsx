import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-download');
}

export default function NoResetTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-download" />;
}
