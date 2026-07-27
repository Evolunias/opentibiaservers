import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-server-usa');
}

export default function NoxiousotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-server-usa" />;
}
