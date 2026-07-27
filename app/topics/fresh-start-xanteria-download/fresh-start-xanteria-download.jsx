import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-xanteria-download');
}

export default function FreshStartXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-xanteria-download" />;
}
