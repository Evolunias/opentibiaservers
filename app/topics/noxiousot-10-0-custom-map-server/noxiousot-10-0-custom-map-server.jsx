import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-custom-map-server');
}

export default function Noxiousot100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-custom-map-server" />;
}
