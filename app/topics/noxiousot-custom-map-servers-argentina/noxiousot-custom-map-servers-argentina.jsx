import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-argentina');
}

export default function NoxiousotCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-argentina" />;
}
