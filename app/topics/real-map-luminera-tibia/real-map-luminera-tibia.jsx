import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-luminera-tibia');
}

export default function RealMapLumineraTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-luminera-tibia" />;
}
