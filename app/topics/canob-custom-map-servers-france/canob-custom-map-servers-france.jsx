import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-servers-france');
}

export default function CanobCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-servers-france" />;
}
