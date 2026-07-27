import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-custom-map-servers');
}

export default function Eldera1098CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-custom-map-servers" />;
}
