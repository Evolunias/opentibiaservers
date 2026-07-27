import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-real-map-servers');
}

export default function Coxaot15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-real-map-servers" />;
}
