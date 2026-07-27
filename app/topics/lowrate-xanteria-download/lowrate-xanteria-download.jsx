import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-xanteria-download');
}

export default function LowrateXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="lowrate-xanteria-download" />;
}
