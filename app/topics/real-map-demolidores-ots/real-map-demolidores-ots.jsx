import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-demolidores-ots');
}

export default function RealMapDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-demolidores-ots" />;
}
