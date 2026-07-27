import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-10-0-real-map-server');
}

export default function Noxiousot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-10-0-real-map-server" />;
}
