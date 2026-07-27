import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-real-map-servers');
}

export default function Oxygenot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-real-map-servers" />;
}
