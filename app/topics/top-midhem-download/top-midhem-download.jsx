import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-download');
}

export default function TopMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-download" />;
}
