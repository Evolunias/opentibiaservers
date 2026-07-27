import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-medivia-servers');
}

export default function CustomMapMediviaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-medivia-servers" />;
}
