import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-download');
}

export default function RealMapSerenityDownloadKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-download" />;
}
