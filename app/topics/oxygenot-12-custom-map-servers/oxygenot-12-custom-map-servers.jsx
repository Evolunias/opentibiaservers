import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-custom-map-servers');
}

export default function Oxygenot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-custom-map-servers" />;
}
