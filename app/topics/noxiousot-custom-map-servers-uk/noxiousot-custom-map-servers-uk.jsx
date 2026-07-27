import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-uk');
}

export default function NoxiousotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-uk" />;
}
