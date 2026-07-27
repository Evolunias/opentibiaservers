import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-brazil');
}

export default function NilotRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-brazil" />;
}
