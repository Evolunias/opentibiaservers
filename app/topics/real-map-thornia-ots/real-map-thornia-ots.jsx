import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thornia-ots');
}

export default function RealMapThorniaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-thornia-ots" />;
}
