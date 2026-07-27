import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-download');
}

export default function NewCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-canob-download" />;
}
