import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-download');
}

export default function RealMapEvoluniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-download" />;
}
