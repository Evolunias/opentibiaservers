import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-download');
}

export default function LowrateMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-download" />;
}
