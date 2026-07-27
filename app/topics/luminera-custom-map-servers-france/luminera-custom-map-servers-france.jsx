import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-france');
}

export default function LumineraCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-france" />;
}
