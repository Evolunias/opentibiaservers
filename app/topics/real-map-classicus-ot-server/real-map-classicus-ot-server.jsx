import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classicus-ot-server');
}

export default function RealMapClassicusOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-classicus-ot-server" />;
}
