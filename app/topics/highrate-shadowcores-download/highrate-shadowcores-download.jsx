import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-shadowcores-download');
}

export default function HighrateShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="highrate-shadowcores-download" />;
}
