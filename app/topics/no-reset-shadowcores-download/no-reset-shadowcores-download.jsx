import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-shadowcores-download');
}

export default function NoResetShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="no-reset-shadowcores-download" />;
}
