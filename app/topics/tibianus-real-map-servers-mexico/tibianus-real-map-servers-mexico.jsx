import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-mexico');
}

export default function TibianusRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-mexico" />;
}
