import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-4-real-map-server');
}

export default function InfernalOt84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-4-real-map-server" />;
}
