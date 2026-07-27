import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-custom-map-servers');
}

export default function Noxiousot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-custom-map-servers" />;
}
