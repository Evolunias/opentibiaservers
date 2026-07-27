import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-download');
}

export default function CurrentCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-canob-download" />;
}
