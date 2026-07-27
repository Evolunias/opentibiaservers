import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-11-custom-map-servers');
}

export default function Oldera11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-11-custom-map-servers" />;
}
