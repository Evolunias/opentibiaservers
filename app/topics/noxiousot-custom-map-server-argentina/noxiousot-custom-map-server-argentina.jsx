import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-argentina');
}

export default function NoxiousotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-argentina" />;
}
