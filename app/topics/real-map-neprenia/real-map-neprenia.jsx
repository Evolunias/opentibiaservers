import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-neprenia');
}

export default function RealMapNepreniaKeywordPage() {
  return <StaticKeywordPage slug="real-map-neprenia" />;
}
