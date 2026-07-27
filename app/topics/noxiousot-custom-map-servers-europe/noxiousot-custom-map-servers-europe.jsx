import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-europe');
}

export default function NoxiousotCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-europe" />;
}
