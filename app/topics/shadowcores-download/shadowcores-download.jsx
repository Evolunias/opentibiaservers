import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-download');
}

export default function ShadowcoresDownloadKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-download" />;
}
