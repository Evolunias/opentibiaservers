import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-10-0-real-map-server');
}

export default function InfernalOt100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-10-0-real-map-server" />;
}
