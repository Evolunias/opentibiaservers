import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-15-real-map-server');
}

export default function InfernalOt15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-15-real-map-server" />;
}
