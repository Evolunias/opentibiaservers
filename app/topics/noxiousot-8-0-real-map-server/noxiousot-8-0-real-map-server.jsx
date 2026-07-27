import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-8-0-real-map-server');
}

export default function Noxiousot80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-8-0-real-map-server" />;
}
