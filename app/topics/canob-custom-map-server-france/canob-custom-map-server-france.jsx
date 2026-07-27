import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-custom-map-server-france');
}

export default function CanobCustomMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-custom-map-server-france" />;
}
