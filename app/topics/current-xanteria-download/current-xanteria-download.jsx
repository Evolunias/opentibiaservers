import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-xanteria-download');
}

export default function CurrentXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="current-xanteria-download" />;
}
