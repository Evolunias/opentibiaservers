import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-north-america');
}

export default function TibiaretroSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-north-america" />;
}
