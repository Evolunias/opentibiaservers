import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-midhem-download');
}

export default function NewMidhemDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-midhem-download" />;
}
