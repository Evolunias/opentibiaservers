import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-12-real-map-server');
}

export default function InfernalOt12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-12-real-map-server" />;
}
