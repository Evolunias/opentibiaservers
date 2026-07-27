import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-servers-france');
}

export default function CustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="custom-map-servers-france" />;
}
