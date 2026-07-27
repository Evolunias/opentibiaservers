import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-custom-map-servers');
}

export default function Oxygenot76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-custom-map-servers" />;
}
