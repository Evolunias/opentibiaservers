import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-aurera-global-server');
}

export default function CustomMapAureraGlobalServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-aurera-global-server" />;
}
