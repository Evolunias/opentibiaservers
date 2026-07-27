import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-aurera-global-ots');
}

export default function RealMapAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-aurera-global-ots" />;
}
