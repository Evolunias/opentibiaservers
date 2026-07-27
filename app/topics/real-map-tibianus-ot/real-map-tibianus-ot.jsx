import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-ot');
}

export default function RealMapTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-ot" />;
}
