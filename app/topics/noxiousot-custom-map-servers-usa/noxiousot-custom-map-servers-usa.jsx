import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-custom-map-servers-usa');
}

export default function NoxiousotCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-custom-map-servers-usa" />;
}
