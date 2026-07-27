import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-8-1-real-map-server');
}

export default function InfernalOt81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-8-1-real-map-server" />;
}
