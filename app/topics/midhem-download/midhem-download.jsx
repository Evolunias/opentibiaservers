import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-download');
}

export default function MidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="midhem-download" />;
}
