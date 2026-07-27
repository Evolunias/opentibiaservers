import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-xanteria-download');
}

export default function PopularXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-xanteria-download" />;
}
