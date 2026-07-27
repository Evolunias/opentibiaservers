import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-shadowcores-download');
}

export default function OfficialShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="official-shadowcores-download" />;
}
