import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-noxiousot-server');
}

export default function RealMapNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-noxiousot-server" />;
}
