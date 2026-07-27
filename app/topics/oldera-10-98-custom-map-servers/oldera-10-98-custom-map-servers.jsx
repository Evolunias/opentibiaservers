import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-98-custom-map-servers');
}

export default function Oldera1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-98-custom-map-servers" />;
}
