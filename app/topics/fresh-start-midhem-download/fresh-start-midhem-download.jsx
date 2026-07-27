import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-download');
}

export default function FreshStartMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-download" />;
}
