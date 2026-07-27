import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-uk');
}

export default function TibiaretroSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-uk" />;
}
