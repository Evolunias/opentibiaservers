import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-seasonal-server-argentina');
}

export default function TibiaretroSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-seasonal-server-argentina" />;
}
