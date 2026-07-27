import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-neprenia-servers');
}

export default function CustomMapNepreniaServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-neprenia-servers" />;
}
