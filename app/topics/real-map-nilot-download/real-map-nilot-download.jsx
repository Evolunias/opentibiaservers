import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-download');
}

export default function RealMapNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-download" />;
}
