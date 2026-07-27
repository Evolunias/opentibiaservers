import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-neprenia-server');
}

export default function CustomMapNepreniaServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-neprenia-server" />;
}
