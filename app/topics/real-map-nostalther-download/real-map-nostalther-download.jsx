import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nostalther-download');
}

export default function RealMapNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-nostalther-download" />;
}
