import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-argentina');
}

export default function NilotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-argentina" />;
}
