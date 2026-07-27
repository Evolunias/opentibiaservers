import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-shadowcores-download');
}

export default function PopularShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-shadowcores-download" />;
}
