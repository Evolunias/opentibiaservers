import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-98-custom-map-server');
}

export default function Noxiousot1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-98-custom-map-server" />;
}
