import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-custom-map-servers-argentina');
}

export default function EvoluniaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-custom-map-servers-argentina" />;
}
