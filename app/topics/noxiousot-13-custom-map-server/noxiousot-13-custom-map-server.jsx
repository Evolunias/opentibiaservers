import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-13-custom-map-server');
}

export default function Noxiousot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-13-custom-map-server" />;
}
