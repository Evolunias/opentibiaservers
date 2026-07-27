import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-download');
}

export default function NoResetRealeraDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-download" />;
}
