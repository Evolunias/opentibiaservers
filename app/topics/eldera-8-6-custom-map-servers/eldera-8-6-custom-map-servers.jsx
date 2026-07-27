import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-custom-map-servers');
}

export default function Eldera86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-custom-map-servers" />;
}
