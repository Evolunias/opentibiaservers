import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-argentina');
}

export default function TibianusRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-argentina" />;
}
