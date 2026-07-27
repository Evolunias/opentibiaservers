import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-download');
}

export default function RealMapEvoleraDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-download" />;
}
