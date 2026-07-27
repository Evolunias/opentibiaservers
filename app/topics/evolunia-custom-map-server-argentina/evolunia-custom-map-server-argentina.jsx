import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-server-argentina');
}

export default function EvoluniaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-server-argentina" />;
}
