import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-ot');
}

export default function RealMapLumineraOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-ot" />;
}
