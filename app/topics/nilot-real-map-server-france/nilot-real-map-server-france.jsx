import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-server-france');
}

export default function NilotRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-server-france" />;
}
