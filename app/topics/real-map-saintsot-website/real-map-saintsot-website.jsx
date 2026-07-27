import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-website');
}

export default function RealMapSaintsotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-website" />;
}
