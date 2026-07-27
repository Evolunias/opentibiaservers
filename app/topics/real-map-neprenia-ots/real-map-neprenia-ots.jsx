import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia-ots');
}

export default function RealMapNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia-ots" />;
}
