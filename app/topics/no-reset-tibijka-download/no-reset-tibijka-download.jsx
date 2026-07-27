import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-download');
}

export default function NoResetTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-download" />;
}
