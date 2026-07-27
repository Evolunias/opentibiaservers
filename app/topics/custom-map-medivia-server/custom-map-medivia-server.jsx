import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-medivia-server');
}

export default function CustomMapMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-medivia-server" />;
}
