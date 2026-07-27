import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-kasteria-server');
}

export default function CustomMapKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-kasteria-server" />;
}
