import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-custom-map-servers');
}

export default function Eldera854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-custom-map-servers" />;
}
