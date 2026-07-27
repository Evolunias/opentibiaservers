import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-germany');
}

export default function NilotRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-germany" />;
}
