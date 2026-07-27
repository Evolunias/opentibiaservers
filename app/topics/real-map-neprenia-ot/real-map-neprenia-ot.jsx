import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-ot');
}

export default function RealMapNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-ot" />;
}
