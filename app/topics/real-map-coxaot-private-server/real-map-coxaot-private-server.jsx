import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-private-server');
}

export default function RealMapCoxaotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-private-server" />;
}
