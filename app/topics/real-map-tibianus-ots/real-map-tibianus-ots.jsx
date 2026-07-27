import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-ots');
}

export default function RealMapTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-ots" />;
}
