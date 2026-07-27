import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-aurera-global-servers');
}

export default function CustomMapAureraGlobalServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-aurera-global-servers" />;
}
