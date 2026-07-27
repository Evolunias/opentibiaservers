import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-download');
}

export default function RealMapArcaniarlDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-download" />;
}
