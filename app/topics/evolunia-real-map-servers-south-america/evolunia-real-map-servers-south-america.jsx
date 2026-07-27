import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-real-map-servers-south-america');
}

export default function EvoluniaRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-real-map-servers-south-america" />;
}
