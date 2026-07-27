import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-uk');
}

export default function AureraGlobalCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-uk" />;
}
