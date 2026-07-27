import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-france');
}

export default function TibiaretroCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-france" />;
}
