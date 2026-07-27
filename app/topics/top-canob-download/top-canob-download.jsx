import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-download');
}

export default function TopCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-canob-download" />;
}
