import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-ots');
}

export default function RealMapSabrehavenOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-ots" />;
}
