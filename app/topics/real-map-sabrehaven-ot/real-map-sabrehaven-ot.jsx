import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-ot');
}

export default function RealMapSabrehavenOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-ot" />;
}
