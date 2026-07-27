import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-7-4-custom-map-server');
}

export default function Noxiousot74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-7-4-custom-map-server" />;
}
