import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-sabrehaven-download');
}

export default function NoResetSabrehavenDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-sabrehaven-download" />;
}
