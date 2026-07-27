import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-9-6-custom-map-server');
}

export default function Noxiousot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-9-6-custom-map-server" />;
}
