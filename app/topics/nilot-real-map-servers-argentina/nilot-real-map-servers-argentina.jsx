import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-argentina');
}

export default function NilotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-argentina" />;
}
