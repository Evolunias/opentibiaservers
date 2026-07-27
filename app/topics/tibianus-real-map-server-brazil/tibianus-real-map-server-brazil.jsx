import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-server-brazil');
}

export default function TibianusRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-server-brazil" />;
}
