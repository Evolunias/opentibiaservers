import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-usa');
}

export default function TibiaretroSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-usa" />;
}
