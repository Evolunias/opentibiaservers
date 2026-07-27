import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-shadowcores-download');
}

export default function NewSeasonShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-season-shadowcores-download" />;
}
