import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-real-map-servers-france');
}

export default function NilotRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-real-map-servers-france" />;
}
