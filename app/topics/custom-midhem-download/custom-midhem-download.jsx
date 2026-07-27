import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-midhem-download');
}

export default function CustomMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-midhem-download" />;
}
