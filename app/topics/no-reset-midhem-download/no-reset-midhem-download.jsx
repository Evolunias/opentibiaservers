import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-midhem-download');
}

export default function NoResetMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-midhem-download" />;
}
