import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-canada');
}

export default function TibiaretroSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-canada" />;
}
