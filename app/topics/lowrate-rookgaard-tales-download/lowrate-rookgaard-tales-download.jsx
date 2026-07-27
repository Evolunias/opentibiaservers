import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-rookgaard-tales-download');
}

export default function LowrateRookgaardTalesDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-rookgaard-tales-download" />;
}
