import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-11-custom-map-server');
}

export default function Noxiousot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-11-custom-map-server" />;
}
