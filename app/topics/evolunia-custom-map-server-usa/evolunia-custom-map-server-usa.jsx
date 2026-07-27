import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-usa');
}

export default function EvoluniaCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-usa" />;
}
