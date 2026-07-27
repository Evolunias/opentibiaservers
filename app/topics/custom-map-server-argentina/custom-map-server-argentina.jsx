import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-server-argentina');
}

export default function CustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-server-argentina" />;
}
