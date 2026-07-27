import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-coxaot-servers');
}

export default function RealMapCoxaotServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-coxaot-servers" />;
}
