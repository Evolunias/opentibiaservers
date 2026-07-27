import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-eldera-servers');
}

export default function CustomMapElderaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-eldera-servers" />;
}
