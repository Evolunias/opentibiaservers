import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-15-custom-map-server');
}

export default function Noxiousot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-15-custom-map-server" />;
}
