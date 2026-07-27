import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-xanteria-download');
}

export default function TopXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-xanteria-download" />;
}
