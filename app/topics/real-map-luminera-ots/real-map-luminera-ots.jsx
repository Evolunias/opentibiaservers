import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-ots');
}

export default function RealMapLumineraOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-ots" />;
}
