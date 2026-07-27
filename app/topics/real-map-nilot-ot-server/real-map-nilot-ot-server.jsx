import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nilot-ot-server');
}

export default function RealMapNilotOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-nilot-ot-server" />;
}
