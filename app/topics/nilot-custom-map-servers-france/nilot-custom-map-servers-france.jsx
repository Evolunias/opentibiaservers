import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-custom-map-servers-france');
}

export default function NilotCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="nilot-custom-map-servers-france" />;
}
