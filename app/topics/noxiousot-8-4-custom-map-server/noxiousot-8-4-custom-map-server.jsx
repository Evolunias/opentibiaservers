import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-4-custom-map-server');
}

export default function Noxiousot84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-4-custom-map-server" />;
}
