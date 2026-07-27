import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-1-custom-map-server');
}

export default function Noxiousot71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-1-custom-map-server" />;
}
