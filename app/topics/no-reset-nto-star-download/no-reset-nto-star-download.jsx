import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-download');
}

export default function NoResetNtoStarDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-download" />;
}
