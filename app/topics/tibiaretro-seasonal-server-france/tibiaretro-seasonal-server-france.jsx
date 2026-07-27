import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-france');
}

export default function TibiaretroSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-france" />;
}
