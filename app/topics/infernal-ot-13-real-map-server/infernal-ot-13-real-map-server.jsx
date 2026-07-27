import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-13-real-map-server');
}

export default function InfernalOt13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-13-real-map-server" />;
}
