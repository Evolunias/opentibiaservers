import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-france');
}

export default function TibiaretroRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-france" />;
}
