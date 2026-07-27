import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-server-france');
}

export default function NilotCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-server-france" />;
}
