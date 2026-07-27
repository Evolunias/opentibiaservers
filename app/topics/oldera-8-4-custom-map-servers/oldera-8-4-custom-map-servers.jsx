import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-4-custom-map-servers');
}

export default function Oldera84CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-4-custom-map-servers" />;
}
