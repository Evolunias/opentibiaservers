import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-download');
}

export default function NoResetTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-download" />;
}
