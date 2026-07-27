import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-download');
}

export default function RealMapSaintsotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-download" />;
}
