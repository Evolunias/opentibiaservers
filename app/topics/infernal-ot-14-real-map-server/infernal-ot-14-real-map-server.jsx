import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-14-real-map-server');
}

export default function InfernalOt14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-14-real-map-server" />;
}
