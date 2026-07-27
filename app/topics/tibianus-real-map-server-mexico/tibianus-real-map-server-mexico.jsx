import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-mexico');
}

export default function TibianusRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-mexico" />;
}
