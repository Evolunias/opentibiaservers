import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-7-1-real-map-server');
}

export default function InfernalOt71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-7-1-real-map-server" />;
}
