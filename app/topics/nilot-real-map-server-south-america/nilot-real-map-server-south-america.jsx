import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-south-america');
}

export default function NilotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-south-america" />;
}
