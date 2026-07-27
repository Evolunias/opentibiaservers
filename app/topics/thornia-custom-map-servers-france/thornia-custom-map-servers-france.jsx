import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-france');
}

export default function ThorniaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-france" />;
}
