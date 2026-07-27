import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-download');
}

export default function NoResetTibiameDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-download" />;
}
