import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-0-real-map-server');
}

export default function InfernalOt80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-0-real-map-server" />;
}
