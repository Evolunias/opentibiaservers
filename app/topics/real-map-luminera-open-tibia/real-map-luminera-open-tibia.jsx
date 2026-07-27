import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-open-tibia');
}

export default function RealMapLumineraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-open-tibia" />;
}
