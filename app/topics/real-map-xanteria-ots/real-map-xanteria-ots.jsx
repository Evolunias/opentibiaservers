import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-xanteria-ots');
}

export default function RealMapXanteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-xanteria-ots" />;
}
