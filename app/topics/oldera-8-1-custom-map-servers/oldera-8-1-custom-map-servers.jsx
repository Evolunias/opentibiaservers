import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-8-1-custom-map-servers');
}

export default function Oldera81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-8-1-custom-map-servers" />;
}
