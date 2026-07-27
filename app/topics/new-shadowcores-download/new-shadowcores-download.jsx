import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-shadowcores-download');
}

export default function NewShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="new-shadowcores-download" />;
}
