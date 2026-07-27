import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-midhem-download');
}

export default function CurrentMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-midhem-download" />;
}
