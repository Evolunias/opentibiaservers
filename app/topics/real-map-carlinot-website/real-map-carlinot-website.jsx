import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-website');
}

export default function RealMapCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-website" />;
}
