import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-download');
}

export default function LowrateCanobDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-download" />;
}
