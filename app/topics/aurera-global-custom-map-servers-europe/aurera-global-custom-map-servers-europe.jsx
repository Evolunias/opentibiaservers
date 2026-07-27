import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-europe');
}

export default function AureraGlobalCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-europe" />;
}
