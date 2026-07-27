import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-south-america');
}

export default function NilotRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-south-america" />;
}
