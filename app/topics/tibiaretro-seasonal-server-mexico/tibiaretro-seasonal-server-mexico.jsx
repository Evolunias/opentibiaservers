import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-mexico');
}

export default function TibiaretroSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-mexico" />;
}
