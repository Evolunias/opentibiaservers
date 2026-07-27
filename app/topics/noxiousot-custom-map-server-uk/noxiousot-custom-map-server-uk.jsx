import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-uk');
}

export default function NoxiousotCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-uk" />;
}
