import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-11-real-map-server');
}

export default function InfernalOt11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-11-real-map-server" />;
}
