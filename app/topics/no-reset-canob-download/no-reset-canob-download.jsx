import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-download');
}

export default function NoResetCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-download" />;
}
