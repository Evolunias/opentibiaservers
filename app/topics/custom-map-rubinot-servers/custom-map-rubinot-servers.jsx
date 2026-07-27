import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-rubinot-servers');
}

export default function CustomMapRubinotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-rubinot-servers" />;
}
