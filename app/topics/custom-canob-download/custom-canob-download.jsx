import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-download');
}

export default function CustomCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-download" />;
}
