import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-download');
}

export default function CanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="canob-download" />;
}
