import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-europe');
}

export default function NoxiousotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-europe" />;
}
