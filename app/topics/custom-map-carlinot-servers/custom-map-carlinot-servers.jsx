import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-carlinot-servers');
}

export default function CustomMapCarlinotServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-carlinot-servers" />;
}
